def slidingWindow(arr, k):
    n = len(arr)
    if k > n:
        return None
    
    window_sum = sum(arr[:k])
    max_sum = window_sum
    
    for i in range(1, n - k + 1):
        window_sum = window_sum - arr[i - 1] + arr[i + k - 1]
        max_sum = max(max_sum, window_sum)
    
    return max_sum