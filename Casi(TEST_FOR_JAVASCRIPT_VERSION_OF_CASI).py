import os
import requests, json

def getCandidate():
    openFECURL = "https://api.open.fec.gov/v1/candidates/search/?api_key=HfzIt2fmefaRYixDhTCcybD913O1irf687cPga6E"
    #candidateName = "Joe Biden"
    #openFEC_API_KEY = "HfzIt2fmefaRYixDhTCcybD913O1irf687cPga6E"
    #openFECURL = "https://api.open.fec.gov/v1/candidate/candidates/search/?page=1&office=P&name="+candidateName+ "&api_key="+openFEC_API_KEY+ "&sort=name&per_page=20&candidate_status=P&sort_nulls_last=false&sort_null_only=false&sort_hide_null=false"
    requestCandidate = requests.get(openFECURL).json()
    print(json.dumps(requestCandidate, indent=4))
    return

