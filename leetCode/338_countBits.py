class Solution:
   def countBits(self, n: int) -> List[int]:
      res = []
      for i in range(n+1):
         bNum = bin(i)
         bStr = str(bNum)
         res.append(bStr.count('1'))
      return res
