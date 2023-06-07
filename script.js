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
        //row.textContent=i+"_"+j;
        column.appendChild(row);
    }
    grid.appendChild(column);
}
document.appendChild(grid);