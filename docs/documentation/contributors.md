---
title: Contributors
sidebar: null
---

import ContributorCard from '@site/src/components/contributorsCard';

# Meet the Team

EPOS open source projects thrive on collaboration and the collective efforts of diverse individuals from around the world. Contributors bring their unique skills, perspectives, and expertise to create , build, improve, and maintain software that benefits the broader community. These contributions can range from writing code, fixing bugs, and improving documentation to designing user interfaces, testing features, and providing feedback. By participating in EPOS open source, people not only help create accessible, innovative, and sustainable solutions but also gain valuable experience, enhance their technical skills, and build a global network of like-minded professionals. Together, they foster a spirit of knowledge sharing and innovation that drives the EPOS open source movement forward.

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
