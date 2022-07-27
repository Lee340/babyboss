import { getDatabase, ref, set } from "firebase/database";
import { app } from "./FirebaseApp";

const db = getDatabase(app);

export function createArtwork({
  title,
  date,
  material,
  height,
  width,
  depth,
  artistId,
  artworkId,
}) {
  set(ref(db, "artworks/" + artworkId), {
    title,
    date,
    material,
    height,
    width,
    depth,
    artistId,
    artworkId,
  });
  // set(ref(db, "artists/" + artistId + "/artworks/" + artworkId), {
  //   title,
  //   date,
  //   material,
  //   height,
  //   width,
  //   depth,
  //   artistId,
  //   artworkId,
  // });
}
