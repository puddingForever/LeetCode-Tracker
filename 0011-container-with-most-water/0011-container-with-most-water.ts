function maxArea(height: number[]): number {
    // 1. left 와 right에서 점점 중앙으로 모은다. (left < right)
    // 1.1 둘이 길이가 같다면, x * y를 해준다  
    // 1.2 둘의 길이가 다르다면, 더 작은 길이의 값을 y축으로 두고 , x * y를 한다
    // 1.3 x축의 길이는 right의 x축에서 left의 x축을 뺀다 
    // 1.4 중앙으로 움직일때는 y축이 작은애를 마이너스 해준다. (둘의 값이 같으면 둘다 마이너스)
    // 2. 만약 다음단계의 크기가 더 작으면, break해서 이전 단계의 max값을 리턴한다. 
    // 2.1. 계속 크기를 좁힐 필요가 없다.  크기가 작아지면 x축도 작아지기 떄문에 

    let left = 0;
    let right = height.length-1;// 1
    let max = -Infinity;
    
    while(left < right){ //  [1,1] 
        let tmp = 0;
        if(height[left] < height[right]){
             tmp = height[left] * (right - left); 
             left++;
        }else if(height[right] < height[left]){
             tmp = height[right] * (right - left); 
             right--;
        }else{
            tmp = height[right] * (right - left);  // 1
            right--;
            left++;
        }
        max = Math.max(max,tmp);
    }

    return max;

    
};