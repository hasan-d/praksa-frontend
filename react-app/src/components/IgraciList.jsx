import IgraciCard from './IgraciCard';

function IgraciList({igraci, onDelete, onEdit}){
    return(
        <div className="row g-3">
            {igraci.map((igrac, index)=>(
                <IgraciCard
                 key={index}
                 igrac={igrac}
                 index={index}
                 onDelete={onDelete}
                 onEdit={onEdit}
                />
            ))}
        </div>
    );
}
export default IgraciList;