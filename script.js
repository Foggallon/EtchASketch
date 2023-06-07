let siata=document.querySelector('.siatka');
let rows=16;
let columns=16;


let grid = document.querySelector('.grid');
grid.className="grid";
for(let i=0;i<=columns;++i)
{
    let column=document.createElement('div');
    column.className='column';
    for(let j=0;j<=rows;++j)
    {
        let row = document.createElement('div');
        row.className='row';
        row.addEventListener('mouseover',()=>
        {
            event.target.classList.add('paint');
        });
        column.appendChild(row);
    }
    grid.appendChild(column);
}
document.body.appendChild(grid);
siata.addEventListener('input', function(){
    if(siata.value<16) return;
    grid.innerHTML='';
    for(let i=0;i<=siata.value;++i)
    {
        let column=document.createElement('div');
        column.className='column';
        for(let j=0;j<=siata.value;++j)
        {
            let row = document.createElement('div');
            row.className='row';
            row.addEventListener('mouseover',()=>
            {
                event.target.classList.add('paint');
            });
            column.appendChild(row);
        }
        grid.appendChild(column);
    }
    document.body.appendChild(grid);

});

let reset=document.querySelector('.guzior');
reset.addEventListener('click',function(){
    let rows=document.querySelectorAll('.grid .column .row');
    rows.forEach((row)=>{
        row.classList.remove('paint');
    })
});