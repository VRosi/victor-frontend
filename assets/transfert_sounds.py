import json
import os
import numpy as np

path = '/Users/VictorRosi/Sites/victor-frontend/assets/sounds_test'
sounds = []
url = ''
name = ''
instrument = ''
playingStyle = ''
pitch = ''
dynamic = ''
soundSample = [] #np.array([1,1])

entries = os.listdir(path)

for i, sound in enumerate(entries):
    if '.wav' in sound:
        # print(sound)
        soundCarac = sound.split('-')
        temp = soundCarac[-1].split('.')
        soundCarac[-1] = temp[0]
        name = sound
        url = "/" + os.getcwd().split('/')[-1] + "/" + name
        pitch = soundCarac[2]
        dynamic = soundCarac[-1]
        if 'n_' in soundCarac[0]:
            instrument = soundCarac[0].split('_')[1]
        else:
            instrument = soundCarac[0]
        playingStyle = soundCarac[1]
        tempy = {
            "name": name,
            "instrument": instrument,
            "playingStye": playingStyle,
            "pitch": pitch,
            "dynamic": dynamic,
            "url": url
        }
        soundSample.append(tempy)

with open('sound_dict.json', 'w') as json_file:
    json.dump({"sounds" : soundSample}, json_file, indent=2)
