import React from 'react';
// Original synthetic display coordinates on the generated 1536 × 1024 aerial.
// These shapes have no geographic projection and are never prescription geometry.
export const fictionalZones = [
 {id:'A',color:'#bac68e',points:'300,320 600,220 650,450 420,570 200,530 230,420',label:[430,410]},
 {id:'B',color:'#df9688',points:'600,220 905,165 940,270 1070,430 1110,470 800,600 650,450',label:[820,360]},
 {id:'C',color:'#dfc08d',points:'200,530 420,570 650,450 800,600 665,755 480,900 340,850 195,710',label:[460,710]},
];
export function FieldZones({selected,decorative=false}){return <svg className="field-zone-overlay" viewBox="0 0 1536 1024" preserveAspectRatio="xMidYMid slice" role={decorative?undefined:'img'} aria-hidden={decorative||undefined} aria-label={decorative?undefined:`Fictional field zones A, B and C${selected?`; Zone ${selected} selected`:''}. No geographic or equipment coordinates.`}>{fictionalZones.map(z=><g key={z.id} data-zone={z.id} data-selected={selected===z.id}><polygon points={z.points} fill={z.color} fillOpacity={selected?(selected===z.id ? 0.58 : 0.12):.38} stroke="#fffbee" strokeWidth={selected===z.id?7:4}/><text x={z.label[0]} y={z.label[1]} textAnchor="middle">{z.id}</text></g>)}</svg>}
