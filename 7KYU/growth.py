import math

def nb_year(p0, percent, aug, p):
    year = 0
    while p0 < p:
        p0 = math.floor(p0 + p0 * (percent / 100) + aug)
        year += 1
    return year
