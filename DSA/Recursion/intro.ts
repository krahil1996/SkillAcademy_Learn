
function func(n:number) : void {
    if (n==0) return;
    console.log(n);
    func (n-1);
    console.log(n);
}
func(5);

