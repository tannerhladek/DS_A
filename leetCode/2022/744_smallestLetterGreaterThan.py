class Solution(object):
   def nextGreatestLetter(self, letters, target):
      """
      :type letters: List[str]
      :type target: str
      :rtype: str
      """

      for i in range(len(letters)):
         if letters[i] > target:
            return letters[i]

      return letters[0]
