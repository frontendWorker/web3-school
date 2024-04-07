var addTwoNumbers = function(l1, l2) {
    const head = current = {next:null}
    let needAddOne = false;
    function moveNext(link){
        link = link.next
    }
    while(l1.next && l2.next){
        let val = l1.val + l2.val + (needAddOne ? 1 : 0);
        needAddOne = false
        if(val > 9){
            needAddOne = true;
            val = val % 10
        }
        current.next = {
            val,
            next:null
        }
        moveNext(current)
        moveNext(l1)
        moveNext(l2)
        
    }
    while(l1.next){
        let val = l1.val  + (needAddOne ? 1 : 0);
        needAddOne = false
        if(val > 9){
            needAddOne = true;
            val = val % 10
        }
        current.next = {
            val,
            next:null
        }
        moveNext(current)
        moveNext(l1)
        
    }
    while(l2.next){
        let val =  l2.val + (needAddOne ? 1 : 0);
        needAddOne = false
        if(val > 9){
            needAddOne = true;
            val = val % 10
        }
        current.next = {
            val,
            next:null
        }
        moveNext(current)
        moveNext(l2)
    }
    return head.next
};

console.log(addTwoNumbers([2,4,3],[5,6,4]))