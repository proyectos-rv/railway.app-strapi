import type { Struct, Schema } from '@strapi/strapi';

export interface CursosMateriales extends Struct.ComponentSchema {
  collectionName: 'components_cursos_materiales';
  info: {
    displayName: 'materiales';
  };
  attributes: {
    Texto_materiales: Schema.Attribute.Text;
    media_materiales: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cursos.materiales': CursosMateriales;
    }
  }
}
