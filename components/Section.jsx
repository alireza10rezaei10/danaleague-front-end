const List = ({ items }) => {
  return (
    <ul className="list-disc pr-5 text-right space-y-2 text-gray-800">
      {items.map((item, idx) => (
        <li key={idx} className="leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  );
};

const Description = ({ text, ltr }) => {
  return (
    <p
      className={`${
        ltr ? "text-left" : ""
      } text-gray-700 leading-relaxed whitespace-pre-line text-justify`}
    >
      {text}
    </p>
  );
};

const Section = ({
  id,
  title,
  description,
  list,
  innerSections,
  ltr,
  children,
}) => (
  <section
    id={id}
    className="scroll-mt-24 bg-white p-6 rounded-2xl shadow-md space-y-4 border border-gray-200"
  >
    {title && (
      <h2 className="text-2xl font-bold text-[var(--primary-color)] border-r-4 border-[var(--primary-color)] pr-3">
        {title}
      </h2>
    )}
    {description && <Description text={description} ltr={ltr} />}
    {list && <List items={list} />}
    {innerSections && (
      <ul className="space-y-4 text-right">
        {innerSections.map((innerSection, idx) => (
          <li
            key={idx}
            className={`p-4 rounded-lg border border-gray-200 ${
              innerSection.COLOR ? `bg-${innerSection.COLOR}` : "bg-gray-50"
            }`}
          >
            <p
              className={`font-semibold text-lg ${
                innerSection.COLOR
                  ? "text-white"
                  : "text-[var(--primary-color)]"
              }  mb-1`}
            >
              {innerSection.TITLE}
            </p>
            <Description text={innerSection.DESCRIPTION} />
            {innerSection.LIST && <List items={innerSection.LIST} />}
          </li>
        ))}
      </ul>
    )}
    {children && <div className="mt-4">{children}</div>}
  </section>
);

export default Section;
