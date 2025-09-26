---
title: Contributors
---
import ContributorCard from '@site/src/components/contributorsCard';

# Meet the Team

{(() => {
  const contributors = [
    { name: "Atakan, Kuvvet" },
    { name: "Atkinson, Philip" },
    { name: "Bailo, Daniele" },
    { name: "Bell, Patrick" },
    { name: "Capotosti, Sara" },
    { name: "Card, Chris" },
    { name: "Carrere, Martin" },
    { name: "Fares, Massimo" },
    { name: "Fenoglio, Lorenzo" },
    { name: "Freda, Carmela" },
    { name: "Giuliacci, Kety" },
    { name: "Glaves, Helen" },
    { name: "Goffi, Claudio" },
    { name: "Jeffery, Keith G." },
    { name: "Jebreel, Abdelkareem" },
    { name: "Lavrnja-Czapski, Janusz" },
    { name: "Malitesta, Mario" },
    { name: "Michalek, Jan" },
    { name: "Molander, Jakob" },
    { name: "Nedrebø, Harald" },
    { name: "Orfino, Andrea" },
    { name: "Paciello, Rossana" },
    { name: "Rasmussen, Viktor S." },
    { name: "Retout, Yann" },
    { name: "Roquencourt, Jean-Baptiste" },
    { name: "Salvi, Marco" },
    { name: "Sbarra, Manuela" },
    { name: "Shelley, Wayne" },
    { name: "Spinuso, Alessandro" },
    { name: "Stuteley, Jon" },
    { name: "Trani, Luca" },
    { name: "Turco, Alessandro" },
    { name: "Ulbricht, Damian" },
    { name: "Vinciarelli, Valerio" },
    { name: "Wang, Xiaoliang" },
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1rem',
      marginTop: '1rem'
    }}>
      {contributors.map((c) => (
        <ContributorCard key={c.name} name={c.name} />
      ))}
    </div>
  );
})()}
