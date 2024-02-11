class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        # this comment lines were my first attempt
        # What I learned was that the filter method does not work because
        # it does not mutate the og since it is passed by reference
        # nums = list(filter((val).__ne__, nums))
        # return len(nums)
        try:
            while True:
                nums.remove(val)
        except ValueError:
            pass


