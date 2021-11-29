# // Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

# // Follow up: Could you solve it without converting the integer to a string?

class Solution:
    def isPalindrome(self, x: int) -> bool:
        x = str(x)
        if(len(x) < 0):
            return False
        i = 0
        j = len(x)-1

        while i < j:
            if(x[i] != x[j]):
                return False
            i += 1
            j -= 1

        return True