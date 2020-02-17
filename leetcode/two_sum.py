def twoSum(nums, target):
    #it = iter(nums)
    d = dict()
    for i in range(len(nums)) :
        d[i] = nums[i]
    
    for i in range(len(nums)) :
        if i != d[i] and d:

    return d
                

arr = [2,7,11,15]
t = 13
print(twoSum(arr,t))