import Link from 'next/link';
import buildings from '~/data/buildings';

export const generateBuildingNavLinks = () => {
  const buildingLinks = buildings.map(building => (
    <li key={`building-${building.title}`}>
      <Link as={`/buildings/${building.slug}/`} href={`/building?slug=${building.slug}`}>
        <a>{building.title.toUpperCase()}</a>
      </Link>
    </li>
  ));

  return <ul>{buildingLinks}</ul>;
};
