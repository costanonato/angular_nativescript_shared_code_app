import * as app from "@nativescript/core/application";
import * as dialogs from "@nativescript/core/ui/dialogs";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

export class MovieListHelper {

  static showDeleteMovieConfirmation(message: string): Promise<boolean> {
    return dialogs.confirm({
      title: 'Excluir Filme',
      message: message,
      okButtonText: 'Excluir',
      cancelButtonText: 'Manter Filme'
    });
  }

  static showDrawer(){
    const sideDrawer = <RadSideDrawer><any>app.getRootView();
    sideDrawer.showDrawer();
  }
}