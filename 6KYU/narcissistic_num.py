"""
    A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
"""

def narcissistic(value):
    return value == sum(int(num) ** len(str(value)) for num in str(value))
