import { configureStore } from "@reduxjs/toolkit";
import ColorSlices from "./slices/ColorSlices";
import SizeSlice from "./slices/SizeSlices";
import Play from "../component/ButtonPlay";
import PlaySlices from "./slices/PlaySlices";
import RandomSlices from "./slices/DensitySclice";

const store = configureStore({
  reducer: {
    Color: ColorSlices.reducer,
    Size: SizeSlice.reducer,
    Play: PlaySlices.reducer,
    Density: RandomSlices.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
