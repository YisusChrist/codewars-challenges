"""
Challenge: Find the next perfect square!
"""

from math import sqrt

def find_next_square(sq):
    # Return the next square if sq is a square, -1 otherwise
    result = sqrt(sq)
    return -1 if result % 1 else (result + 1) ** 2
