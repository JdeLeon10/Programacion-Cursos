interface Props {
  title: string;
  description?: string;
}

export const CustomHeader = ({ title, description }: Props) => {
  return (
    <div className="content-center">
      <h1>{title}</h1>
      {/* Validacion de descripcion, si existe o no */}
      {description ? (<p>{description}</p>) : (<p>No se ha añadido ninguna descripción</p>)}
    </div>
  );
};
