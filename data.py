import sqlite3

conn = sqlite3.connect('police_data.db')
c = conn.cursor()

def get_race_nums(race):
    c.execute('SELECT COUNT(*) FROM police_violence_2017 WHERE race=?', race)
    return c.fetchone() # prints the number of victims who were Black

def get_race_names(race):
    c.execute('SELECT name FROM police_violence_2017 WHERE race=?', race)
    return c.fetchall() # prints the names of victims who were Black