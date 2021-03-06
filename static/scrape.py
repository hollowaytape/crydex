from lxml.html import fromstring
import requests
import json

class Pokemon:
	def __init__(self, name, base, pitch, length):
		self.name = name
		self.base = base
		self.pitch = pitch
		self.length = length


# yeah, definitely want to use a raw string here
url = r"http://tcrf.net/Notes:Pok%C3%A9mon_Gold_and_Silver/Pok%C3%A9mon_Cries"
XPATH = '//*[@id="mw-content-text"]/table[2]/tr/td/node()'

page = requests.get(url)
tree = fromstring(page.content)

# I spent like half an hour trying to call tree.xpahth. maybe time to get glasses
cells = tree.xpath(XPATH)
#print cells

# hex cells are nested in <tt> tags, so here they just show up as ''... but the decimals are usable

# all values are surrounded by two spaces and maybe a \n, so strip those out
names = [x.strip() for x in cells[::14]]
bases = [x.strip() for x in cells[11::14]]
pitches = [x.strip() for x in cells[12::14]]
speeds = [x.strip() for x in cells[13::14]]   # remove newlines

print pitches
print speeds

# TODO: Initialize them as Pokemon() objects and export the json.