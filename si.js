function res()
{
	let p,r,t,tamt,si;
	p=pa.value;
	r=ri.value;
	t=tm.value;
	si=p*t*r/100;
	tamt=parseFloat(p)+si;
	s.value=si;
	ta.value=tamt;
}
