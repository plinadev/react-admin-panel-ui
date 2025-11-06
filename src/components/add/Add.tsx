import type { GridColDef } from "@mui/x-data-grid";
import "./add.scss";

interface AddProps {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Add = ({ slug, columns, setOpen }: AddProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setOpen(false);
  };
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => setOpen(false)}>
          X
        </span>
        <h1>Add new {slug}</h1>
        <form onSubmit={handleSubmit}>
          {columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item" key={column.field}>
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
