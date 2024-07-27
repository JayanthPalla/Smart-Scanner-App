import os
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.discovery import build

SCOPES = ['https://www.googleapis.com/auth/drive']

def get_drive_service():
    creds = None
    # The file token.json stores the user's access and refresh tokens
    token_path = os.path.join(os.path.dirname(__file__), 'config', 'token.json')
    if os.path.exists(token_path):
        creds = Credentials.from_authorized_user_file(token_path)
    # If there are no (valid) credentials available, let the user log in
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                os.path.join(os.path.dirname(__file__), 'config', 'client_secret.json'), SCOPES)
            creds = flow.run_local_server(port=8080)
        # Save the credentials for the next run
        with open(token_path, 'w') as token:
            token.write(creds.to_json())
    return build('drive', 'v3', credentials=creds)
