const Badge = ({
  classname,
  title,
  icon,
}: {
  classname?: string;
  title: string;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={`p-3 rounded-[6.25rem] ${classname} inline-flex items-center border text-xs font-medium`}
    >
      {icon}
      {title && <span className="ml-3">{title}</span>}
    </div>
  );
};

export default Badge;
