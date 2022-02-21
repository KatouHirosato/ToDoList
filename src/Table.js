import React from 'react';

function TableHeader(){ 
    return (
            <thead>
             <tr>
              <th>What I have to do</th>
	      <th>Priority</th>
	      <th>Delete</th>
             </tr>
            </thead>
    );
}

function TableBody(props){ 
    const rows = props.characterData.sort(function(a,b){return a.When-b.When}).map(function(row,index){
        return (
            <tr key={row.index}>
                <td>{row.What}</td>
		<td>{row.When}</td>
                <td><button onClick={function(){props.removeCharacter(index)}}>Delete</button></td>
            </tr>
        );
    });
    return <tbody>{rows}</tbody>;
}

function Table(props){
    return (
            <table>
             <TableHeader />
             <TableBody characterData={props.characterData} removeCharacter={props.removeCharacter} />
            </table>
        );
}export default Table;
