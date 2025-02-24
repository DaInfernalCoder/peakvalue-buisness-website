export default function SectionTitle(props) {
  const { smTitle, title, description } = props;

  return (
    <>
      <div className="section-title">
        <h6>{smTitle ? smTitle : "Services"}</h6>
        <h3>{title ? title : "Our Services"}</h3>
        <div className="line-bot"></div>
        <p>
          {description
            ? description
            : "All the lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."}
        </p>
      </div>
    </>
  );
}
