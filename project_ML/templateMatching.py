import cv2
import numpy as np
marks_max_match = 0
id_max_match = 0

def preprocess_image(frame):
    gray_image = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    denoised_image = cv2.bilateralFilter(gray_image, 9, 75, 75)
    binary_image = cv2.adaptiveThreshold(denoised_image, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, 11, 2)
    return binary_image






id_template = cv2.imread(r"templates\id_processed.jpg",cv2.IMREAD_UNCHANGED)
marks_template = cv2.imread(r"templates\marks_processed.jpg",cv2.IMREAD_UNCHANGED)





def perform_template_matching(frame, method = cv2.TM_CCOEFF_NORMED):
    global marks_max_match , id_max_match
    binary_image = preprocess_image(frame)
    copy = frame.copy()
    marks_match_result = cv2.matchTemplate(binary_image, marks_template, method)
    marks_min_val, marks_max_val, marks_min_loc, marks_max_loc = cv2.minMaxLoc(marks_match_result)
    
    id_match_result = cv2.matchTemplate(binary_image, id_template, method)
    id_min_val, id_max_val, id_min_loc, id_max_loc = cv2.minMaxLoc(id_match_result)

    marks_loc, id_loc = (marks_min_loc, id_min_loc) if method in (cv2.TM_SQDIFF, cv2.TM_SQDIFF_NORMED) else (marks_max_loc, id_max_loc)

    if marks_max_val > marks_max_match:
        marks_max_match = marks_max_val
        width, height = marks_template.shape[::-1]
        matchPortion = frame[marks_loc[1]:marks_loc[1] + height, marks_loc[0]:marks_loc[0] + width]
        cv2.rectangle(copy, marks_loc, (marks_loc[0] + width, marks_loc[1] + height), (0, 255, 0), 3)
        cv2.imwrite(r'capture\marks.jpg', matchPortion)
    
    if id_max_val > id_max_match:
        id_max_match = id_max_val
        width, height = id_template.shape[::-1]
        matchPortion = frame[id_loc[1]:id_loc[1] + height, id_loc[0]:id_loc[0] + width]
        cv2.rectangle(copy, id_loc, (id_loc[0] + width, id_loc[1] + height), (0, 0, 255), 3)
        cv2.imwrite(r'capture\id.jpg', matchPortion)
    
    return copy





