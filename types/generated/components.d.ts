import type { Struct, Schema } from '@strapi/strapi';

export interface CursosProgress extends Struct.ComponentSchema {
  collectionName: 'components_cursos_progresses';
  info: {
    displayName: 'progress';
    icon: 'feather';
    description: '';
  };
  attributes: {
    estado: Schema.Attribute.Enumeration<
      ['No Completado', 'En progreso', 'Completado']
    >;
    porcentaje: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
          max: 100;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    fecha_inicio: Schema.Attribute.DateTime;
    fecha_fin: Schema.Attribute.DateTime;
  };
}

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
      'cursos.progress': CursosProgress;
      'cursos.materiales': CursosMateriales;
    }
  }
}
