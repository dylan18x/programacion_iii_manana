import { useState, useId } from 'react';

export default function MayorDeTres(){
    const numero1 = useId()
    const numero2 = useId()
    const numero3 = useId()

    const[n1,setN1] = useState(0)
    const[n2,setN2] = useState(0)
    const[n3,setN3] = useState(0)
}