function findClosest(x: number, y: number, z: number): number {
    // Math.abs 해서 크기가 작은것이 1 
    let first = Math.abs(z-x);
    let second = Math.abs(z-y);

    if(first < second) return 1;
    if(second < first) return 2;

    return 0;
};