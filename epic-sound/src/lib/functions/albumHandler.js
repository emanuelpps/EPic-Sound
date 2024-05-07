
/* mport getAlbum from "@/services/getAlbum";
import { useAlbumStore } from "@/store/albumStore";
export async function albumHandler(albumId) {
    const setAlbum = useAlbumStore(state => state.setAlbum);
    const album = await getAlbum(albumId);
    setAlbum(album.id);
  return album;
}


 */