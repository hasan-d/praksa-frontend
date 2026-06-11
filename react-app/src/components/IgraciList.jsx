import IgraciCard from './IgraciCard';

function IgraciList({igraci, onDelete, onEdit, onDetalji, onEditIndex}) {
    return(
        <div className="row g-3">
            {igraci.map((igrac, index)=>(
                <IgraciCard
                 key={index}
                 igrac={igrac}
                 index={index}
                 onDelete={onDelete}
                 onEdit={onEdit}
                  onEditIndex={onEditIndex}
                  onDetalji={onDetalji}
                />
            ))}
        </div>
    );
}
export default IgraciList;