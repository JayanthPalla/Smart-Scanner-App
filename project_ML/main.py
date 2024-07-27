# Import necessary libraries
import cv2
import imutils
import numpy as np
from tensorflow.keras.models import load_model
from imutils.contours import sort_contours
from templateMatching import preprocess_image, perform_template_matching


# Function to detect contours in an image
def detectContours(img_path):
    # load the input image from disk, convert it to grayscale, and blur
    # it to reduce noise
    image = cv2.imread(img_path)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    blurred = cv2.GaussianBlur(gray, (5, 5), 0)

    # perform edge detection, find contours in the edge map, and sort the
    # resulting contours from left-to-right
    edged = cv2.Canny(blurred, 30, 150)
    cnts = cv2.findContours(edged.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    cnts = imutils.grab_contours(cnts)
    cnts = sort_contours(cnts, method="left-to-right")[0]
	
    return  cnts, gray, image


# Function to extract characters from contours
def getchars(cnts, gray):
    chars = []

    # loop over the contours
    for c in cnts:
        # compute the bounding box of the contour
        (x, y, w, h) = cv2.boundingRect(c)

        # filter out bounding boxes, ensuring they are neither too small
        # nor too large
        if (w >= 5 and w <= 150) and (h >= 15 and h <= 120):
            # extract the character and threshold it to make the character
            # appear as *white* (foreground) on a *black* background, then
            # grab the width and height of the thresholded image
            roi = gray[y:y + h, x:x + w]
            thresh = cv2.threshold(roi, 0, 255, cv2.THRESH_BINARY_INV | cv2.THRESH_OTSU)[1]
            (tH, tW) = thresh.shape

            # if the width is greater than the height, resize along the
            # width dimension
            if tW > tH:
                thresh = imutils.resize(thresh, width=32)

            # otherwise, resize along the height
            else:
                thresh = imutils.resize(thresh, height=32)

            # re-grab the image dimensions (now that its been resized)
            # and then determine how much we need to pad the width and
            # height such that our image will be 32x32
            (tH, tW) = thresh.shape
            dX = int(max(0, 32 - tW) / 2.0)
            dY = int(max(0, 32 - tH) / 2.0)

            # pad the image and force 32x32 dimensions
            padded = cv2.copyMakeBorder(thresh, top=dY, bottom=dY,
                left=dX, right=dX, borderType=cv2.BORDER_CONSTANT,
                value=(0, 0, 0))
            padded = cv2.resize(padded, (32, 32))

            # prepare the padded image for classification via our
            # handwriting OCR model
            padded = padded.astype("float32") / 255.0
            padded = np.expand_dims(padded, axis=-1)

            # update our list of characters that will be OCR'd
            chars.append((padded, (x, y, w, h)))

    # extract the bounding box locations and padded characters
    boxes = [b[1] for b in chars]
    chars = np.array([c[0] for c in chars], dtype="float32")

    return chars,boxes



# Function to extract text using OCR
def extractText(model, chars, boxes, image):
    # OCR the characters using our handwriting recognition model
    preds = model.predict(chars)

    # define the list of label names
    labelNames = "0123456789"
    labelNames += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    labelNames = [l for l in labelNames]

    # loop over the predictions and bounding box locations together
    res_text = ''
    for (pred, (x, y, w, h)) in zip(preds, boxes):
        # find the index of the label with the largest corresponding
        # probability, then extract the probability and label
        i = np.argmax(pred)
        prob = pred[i]
        label = labelNames[i]

        # draw the prediction on the image
        res_text += label
        # print("[INFO] {} - {:.2f}%".format(label, prob * 100))
        cv2.rectangle(image, (x, y), (x + w, y + h), (0, 0, 255), 2)
        cv2.putText(image, label, (x - 10, y - 10),
            cv2.FONT_HERSHEY_SIMPLEX, 1.2, (255, 0, 0), 2)

    return res_text



# Load the handwriting OCR model
model_path = 'handwriting.model'
model = load_model(model_path)



# Main function to process captured images
def process_images(id_path, marks_path):
    # Detect contours and extract text from ID image
    
    cnts, gray, image = detectContours(id_path)
    id_text = extractText(model, *getchars(cnts, gray), image)
    cv2.imwrite( r'output_imgs\id.png' ,image)
    

    # Detect contours and extract text from marks image
    cnts, gray, image = detectContours(marks_path)
    marks_text = extractText(model, *getchars(cnts, gray), image)
    cv2.imwrite( r'output_imgs\marks.png' ,image)

    return id_text, marks_text





# Capture video from the webcam
def capture_images():
    cap = cv2.VideoCapture(0)

    while True:
        ret, frame = cap.read()
        if not ret:
            break
        matched_frame = perform_template_matching(frame, cv2.TM_CCOEFF_NORMED)
        cv2.imshow('Template Matching', matched_frame)
        
        id_path = 'capture/id_preprocessed.jpg'
        marks_path = 'capture/marks_preprocessed.jpg'


        id_match = cv2.imread(r'capture\id.jpg')
        cv2.imwrite(id_path,preprocess_image(id_match))

        marks_match = cv2.imread(r'capture\marks.jpg')
        cv2.imwrite(marks_path,preprocess_image(marks_match))

    

        id_text, marks_text = process_images(id_path, marks_path)
        
        # if cv2.waitKey(1) & 0xFF == ord('q'):
        if id_text and marks_text:
            break

    cap.release()
    cv2.destroyAllWindows()
    
    return [id_text, marks_text]







# Main function to execute the script
# if __name__ == "__main__":
def ml_main():
    print("----------------Capturing started--------------------")
    id_text, marks_text = capture_images()
    # id_path = 'capture/id_preprocessed.jpg'
    # marks_path = 'capture/marks_preprocessed.jpg'


    # id_match = cv2.imread(r'capture\id.jpg')
    # cv2.imwrite(id_path,preprocess_image(id_match))

    # marks_match = cv2.imread(r'capture\marks.jpg')
    # cv2.imwrite(marks_path,preprocess_image(marks_match))

    

    # id_text, marks_text = process_images(id_path, marks_path)

    print("ID : ", id_text)
    print("Marks : ", marks_text)
    
    return [id_text, marks_text]
