---
title: Contributors
sidebar: null
---

import ContributorCard from '@site/src/components/ContributorCard';

# Meet the Team

The EPOS open source platform is built by a diverse team of contributors from across the globe. The individuals listed on this page have shaped the project through a wide range of contributions: from writing code and fixing bugs to improving documentation and testing new features.

Their collective effort is what makes it possible to provide a free and open platform for integrating geospatial data. We are immensely grateful for their dedication and for fostering a spirit of innovation and knowledge sharing within the geoscience community.

{(() => {
const contributors = [
{ name: "Abdelkareem Jebreel" },
{ name: "Alessandro Crocetta" },
{ name: "Alessandro Spinuso" },
{ name: "Alessandro Turco" },
{ name: "Andrea Orfino" },
{ name: "Carmela Freda" },
{ name: "Chris Card" },
{ name: "Christian Rønnevik" },
{ name: "Claudio Goffi" },
{ name: "Damian Ulbricht" },
{ name: "Daniel Warren" },
{ name: "Daniele Bailo" },
{ name: "Harald Nedrebø" },
{ name: "Helen Glaves" },
{ name: "Jakob Molander" },
{ name: "Jan Michalek" },
{ name: "Janusz Lavrnja-Czapski" },
{ name: "Jean-Baptiste Roquencourt" },
{ name: "Jon Stuteley" },
{ name: "Keith G. Jeffery" },
{ name: "Kety Giuliacci" },
{ name: "Kuvvet Atakan" },
{ name: "Lorenzo Fenoglio" },
{ name: "Luca Trani" },
{ name: "Ludovico Vitiello" },
{ name: "Manuela Sbarra" },
{ name: "Marco Salvi" },
{ name: "Mario Malitesta" },
{ name: "Martin Carrere" },
{ name: "Massimo Fares" },
{ name: "Patrick Bell" },
{ name: "Philip Atkinson" },
{ name: "Rossana Paciello" },
{ name: "Sara Capotosti" },
{ name: "Valerio Vinciarelli" },
{ name: "Viktor S. Rasmussen" },
{ name: "Wayne Shelley" },
{ name: "Xiaoliang Wang" },
{ name: "Yann Retout" },
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
