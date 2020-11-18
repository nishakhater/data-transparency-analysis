import sqlite3

conn = sqlite3.connect('police_data.db')
c = conn.cursor()

def get_race_nums(race):
    c.execute('SELECT COUNT(*) FROM police_violence_2017 WHERE race=?', race)
    return c.fetchone() # prints the number of victims who were Black

def get_race_names(race):
    c.execute('SELECT name FROM police_violence_2017 WHERE race=?', race)
    return c.fetchall() # prints the names of victims who were Black

def body_cams():
    c.execute('SELECT body_camera FROM police_violence',)
    body_cams = c.fetchall()
    body_cams = [x[0] for x in body_cams]
    c.execute('SELECT criminal_charges FROM police_violence',)
    charges = c.fetchall()
    charges = [x[0] for x in charges]
    charged_cam = 0
    charged_no_cam = 0
    no_charge_cam = 0
    no_charge_no_cam = 0
    charged_unknown = 0
    no_charge_unknown = 0
    for i in range(len(charges)):
        charge = charges[i]
        cam = body_cams[i]
        if charge == "No known charges":
            if not cam:
                no_charge_unknown += 1
            elif cam == "No":
                no_charge_no_cam += 1
            else:
                no_charge_cam += 1
        else:
            if not cam:
                charged_unknown += 1
            elif cam == "No":
                charged_no_cam += 1
            else:
                charged_cam += 1
    print("Charged with body cam:                  ", charged_cam)
    print("Charged with no body cam:               ", charged_no_cam)
    print("Not charged with body cam:              ", no_charge_cam)
    print("Not charged with no body cam:           ", no_charge_no_cam)
    print("Charged and unknown about body cam:     ", charged_unknown)
    print("Not charged and unknown about body cam: ", no_charge_unknown)

def gender():
    c.execute('SELECT criminal_charges FROM police_violence',)
    charges = c.fetchall()
    charges = [x[0] for x in charges]
    c.execute('SELECT gender FROM police_violence')
    gender = c.fetchall()
    gender = [x[0] for x in gender]
    charge_female = 0
    charge_male = 0
    charge_transgender = 0
    charge_unknown = 0
    none_female = 0
    none_male = 0
    none_transgender = 0
    none_unknown = 0
    for i in range(len(gender)):
        g = gender[i]
        charge = charges[i]
        if charge == "No known charges":
            if g == "Female":
                none_female += 1
            elif g == "Male":
                none_male += 1
            elif g == "Transgender":
                none_transgender += 1
            elif g == "Unknown":
                none_unknown += 1
        else:
            if g == "Female":
                charge_female += 1
            elif g == "Male":
                charge_male += 1
            elif g == "Transgender":
                charge_transgender += 1
            elif g == "Unknown":
                charge_unknown += 1
    print("Charged and female victim:             ", charge_female)
    print("Charged and male victim:               ", charge_male)
    print("Charged and transgender victim:        ", charge_transgender)
    print("Charged and unknown gender victim:     ", charge_unknown)
    print("Not charged and female victim:         ", none_female)
    print("Not charged and male victim:           ", none_male)
    print("Not charged and transgender victim:    ", none_transgender)
    print("Not charged and unknown gender victim: ", none_unknown)

def race():
    c.execute('SELECT criminal_charges FROM police_violence',)
    charges = c.fetchall()
    charges = [x[0] for x in charges]
    c.execute('SELECT race FROM police_violence')
    races = c.fetchall()
    races = [x[0] for x in races]
    charged_races = {}
    not_charged_races = {}
    len_longest = len("Pacific Islander")
    for i in range(len(races)):
        if charges[i] == "No known charges":
            if races[i] in not_charged_races:
                not_charged_races[races[i]] += 1
            else:
                not_charged_races[races[i]] = 1
        else:
            if races[i] in charged_races:
                charged_races[races[i]] += 1
            else:
                charged_races[races[i]] = 1
    for k,v in not_charged_races.items():
        space_string_length = len_longest - len(k)
        space_string = ""
        for i in range(space_string_length):
            space_string += " "
        print("Not charged and victim was " + k + ":  " + space_string + str(v))
    for k,v in charged_races.items():
        space_string_length = len_longest - len(k)
        space_string = ""
        for i in range(space_string_length):
            space_string += " "
        print("Charged and victim was " + k + ":      " + space_string + str(v))

def mental_health():
    c.execute('SELECT criminal_charges FROM police_violence',)
    charges = c.fetchall()
    charges = [x[0] for x in charges]
    c.execute('SELECT mental_illness_symptoms FROM police_violence')
    mental_illness = c.fetchall()
    mental_illness = [x[0] for x in mental_illness]
    charged = {}
    not_charged = {}
    len_longest = len("Drug or alcohol use")
    for i in range(len(charges)):
        if charges[i] == "No known charges":
            if mental_illness[i] in not_charged:
                not_charged[mental_illness[i]] += 1
            else:
                not_charged[mental_illness[i]] = 1
        else:
            if mental_illness[i] in charged:
                charged[mental_illness[i]] += 1
            else:
                charged[mental_illness[i]] = 1
    for k,v in not_charged.items():
        space_string_length = len_longest - len(k)
        space_string = ""
        for i in range(space_string_length):
            space_string += " "
        print("Not charged and " + k + " for mental illness symptoms:  " + space_string + str(v))
    for k,v in charged.items():
        space_string_length = len_longest - len(k)
        space_string = ""
        for i in range(space_string_length):
            space_string += " "
        print("Charged and " + k + " for mental illness symptoms:      " + space_string + str(v))

print("-------------------------------------------------")
body_cams()
print("-------------------------------------------------")
gender()
print("-------------------------------------------------")
race()
print("-------------------------------------------------")
mental_health()
print("-------------------------------------------------")
