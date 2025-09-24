function convertToTitle(columnNumber: number): string {

    let res = "";

    // 26진법 
    // 0 부터 시작하게 해서 65 를 기준으로 알파벳을 구한다 
    // 뒤에서부터 시작해서 거꾸로 string만들기 
    while(columnNumber > 0){
         columnNumber--; // 인덱스 0부터 시작해야하니까 하나씩 줄여줌 
         let char = String.fromCharCode(65 + ( columnNumber%26) ); 
         res = char + res;
         columnNumber = Math.floor(columnNumber/26); // 뒷자리가 완료되었으니, 앞자리 계산 
    }

    return res;
};