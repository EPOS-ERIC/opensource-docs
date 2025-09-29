---
title: Contributors
sidebar: null
---

import ContributorCard from '@site/src/components/contributorsCard';

# Meet the Team

The EPOS open-source platform is built by a diverse team of contributors from across the globe. The individuals listed on this page have shaped the project through a wide range of contributions: from writing code and fixing bugs to improving documentation and testing new features.

Their collective effort is what makes it possible to provide a free and open platform for integrating geospatial data. We are immensely grateful for their dedication and for fostering a spirit of innovation and knowledge sharing within the geoscience community.

{(() => {
const contributors = [
{ name: "Kuvvet Atakan" },
{ name: "Philip Atkinson" },
{ name: "Daniele Bailo" },
{ name: "Patrick Bell" },
{ name: "Sara Capotosti" },
{ name: "Chris Card" },
{ name: "Martin Carrere" },
{ name: "Massimo Fares" },
{ name: "Lorenzo Fenoglio" },
{ name: "Carmela Freda" },
{ name: "Kety Giuliacci" },
{ name: "Helen Glaves" },
{ name: "Claudio Goffi" },
{ name: "Keith G. Jeffery" },
{ name: "Abdelkareem Jebreel" },
{ name: "Janusz Lavrnja-Czapski" },
{ name: "Mario Malitesta" },
{ name: "Jan Michalek" },
{ name: "Jakob Molander" },
{ name: "Harald Nedrebø" },
{ name: "Andrea Orfino" },
{ name: "Rossana Paciello" },
{ name: "Viktor S. Rasmussen" },
{ name: "Yann Retout" },
{ name: "Ludovico Vitiello" },
{ name: "Jean-Baptiste Roquencourt" },
{ name: "Marco Salvi" },
{ name: "Manuela Sbarra" },
{ name: "Wayne Shelley" },
{ name: "Alessandro Spinuso" },
{ name: "Jon Stuteley" },
{ name: "Luca Trani" },
{ name: "Alessandro Turco" },
{ name: "Damian Ulbricht" },
{ name: "Alessandro Crocetta" },
{ name: "Valerio Vinciarelli" },
{ name: "Xiaoliang Wang" },
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
