import tekore as tk 

def authorize():
    CLIENT_ID = "12824720980943c684531a5514a21114" 
    CLIENT_SECRET = "6eb9eb97a614492393a1cfe2e606b227"   
    app_token = tk.request_client_token(CLIENT_ID, CLIENT_SECRET)
    return tk.Spotify(app_token)