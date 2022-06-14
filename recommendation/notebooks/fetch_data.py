import sys
import authorization
import pandas as pd 
from tqdm import tqdm  
import time

#GET AUTH
sp = authorization.authorize()

#GET ALL GENRES 
genres = sp.recommendation_genre_seeds()

#NO. OF RECOMMENDATIONS PER GENRE 
n_recs = 100 

#information to crawl
data_dict = {"id":[], "genre":[], "track_name":[], "artist_name":[],"valence":[], "energy":[]}

#Crawling 
for g in tqdm(genres):
    #get n recommendation 
    recs = sp.recommendations(genres=[g], limit = n_recs)
    recs = eval(recs.json().replace("null","-999").replace("false","False").replace("ture","True"))["tracks"]

    for track in recs:
        # ID AND GENRE
        data_dict["id"].append(track["id"])
        data_dict["genre"].append(g)

        track_meta = sp.track(track["id"])
        data_dict["track_name"].append(track_meta.name)
        data_dict["artist_name"].append(track_meta.album.artists[0].name)

        #VALENCE AND ENERGY
        track_features = sp.track_audio_features(track["id"])
        data_dict["valence"].append(track_features.valence)
        data_dict["energy"].append(track_features.energy)

        time.sleep(0.2)


#PROCESS DATA 
