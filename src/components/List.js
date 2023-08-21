import React from "react";

function List({ people }) {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image, birthdate } = person;
        const birthdateDate = new Date(birthdate); // Doğum tarihini Date nesnesine dönüştür
        const today = new Date(); // Bugünün tarihi
        const formattedBirthdate = birthdate ? new Date(birthdate).toLocaleDateString() : '';

        // Yıl farkını hesapla
        const yearDiff = today.getFullYear() - birthdateDate.getFullYear();
        // Doğum gününün bu yılki tarihini oluştur
        const thisYearBirthdate = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());

        // Bugün ve doğum günü arasındaki gün farkını hesapla
        const timeDiff = thisYearBirthdate - today;
        const daysRemaining = Math.abs(Math.ceil(timeDiff / (1000 * 60 * 60 * 24)));
        
     

        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{formattedBirthdate} tarihinde Doğdu ve {yearDiff} yaşında</p>
              <p>Doğum gününe <span className="colored">{daysRemaining} </span>gün kaldı</p>
            </div>
          </article>
        );
      })}
    </>
  );
}

export default List;
