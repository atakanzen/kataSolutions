def find_outlier(integers):
    odds = [num for num in integers if num%2!=0]
    evens = [num for num in integers if num%2==0]
    return odds[0] if len(odds) == 1 else evens[0]
