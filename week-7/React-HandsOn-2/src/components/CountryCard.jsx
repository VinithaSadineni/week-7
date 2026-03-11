function CountryCard({ country }) {
  const {
    name,
    flags,
    capital,
    population,
    region,
  } = country;

  const formatPopulation = (pop) => {
    if (pop >= 1_000_000) {
      return (pop / 1_000_000).toFixed(1) + 'M';
    } else if (pop >= 1_000) {
      return (pop / 1_000).toFixed(1) + 'K';
    }
    return pop.toString();
  };

  return (
    <div className="country-card">
      <div className="flag-container">
        <img 
          src={flags.png} 
          alt={`Flag of ${name.common}`}
          className="flag-image"
        />
      </div>
      <div className="card-content">
        <h3 className="country-name">{name.common}</h3>
        {capital && (
          <p className="country-info">
            <strong>Capital:</strong> {capital[0]}
          </p>
        )}
        <p className="country-info">
          <strong>Population:</strong> {formatPopulation(population)}
        </p>
        <p className="country-info">
          <strong>Region:</strong> {region}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
