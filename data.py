import sqlite3

conn = sqlite3.connect('police_data.db')
c = conn.cursor()

race = ('Black',)
c.execute('SELECT COUNT(*) FROM police_violence_2017 WHERE race=?', race)
print(c.fetchone()) # prints the number of victims who were Black

c.execute('SELECT name FROM police_violence_2017 WHERE race=?', race)
print(c.fetchall()) # prints the names of victims who were Black