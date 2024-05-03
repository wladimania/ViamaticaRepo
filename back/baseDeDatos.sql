PGDMP         &                |            login    15.1    15.1 Z    g           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            h           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            i           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            j           1262    49468    login    DATABASE     z   CREATE DATABASE login WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Ecuador.1252';
    DROP DATABASE login;
                postgres    false            �            1259    49470    persona    TABLE     
  CREATE TABLE public.persona (
    "idPersona" integer NOT NULL,
    nombres character varying(60) NOT NULL,
    apellido character varying(60) NOT NULL,
    identificacion character varying(10),
    id_persona integer NOT NULL,
    fecha_nacimiento date NOT NULL
);
    DROP TABLE public.persona;
       public         heap    postgres    false            k           0    0    COLUMN persona."idPersona"    COMMENT     =   COMMENT ON COLUMN public.persona."idPersona" IS 'idPersona';
          public          postgres    false    215            �            1259    49469    persona_idPersona_seq    SEQUENCE     �   CREATE SEQUENCE public."persona_idPersona_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."persona_idPersona_seq";
       public          postgres    false    215            l           0    0    persona_idPersona_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."persona_idPersona_seq" OWNED BY public.persona."idPersona";
          public          postgres    false    214            �            1259    49544    persona_id_persona_seq    SEQUENCE     �   CREATE SEQUENCE public.persona_id_persona_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.persona_id_persona_seq;
       public          postgres    false    215            m           0    0    persona_id_persona_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.persona_id_persona_seq OWNED BY public.persona.id_persona;
          public          postgres    false    226            �            1259    49509    rol    TABLE     _   CREATE TABLE public.rol (
    "idRol" integer NOT NULL,
    "rolName" character varying(20)
);
    DROP TABLE public.rol;
       public         heap    postgres    false            �            1259    49531    rolOpciones    TABLE     z   CREATE TABLE public."rolOpciones" (
    "nombreOpcion" character varying(50) NOT NULL,
    "idOpcion" integer NOT NULL
);
 !   DROP TABLE public."rolOpciones";
       public         heap    postgres    false            �            1259    49530    rolOpciones_nombreOpcion_seq    SEQUENCE     �   CREATE SEQUENCE public."rolOpciones_nombreOpcion_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public."rolOpciones_nombreOpcion_seq";
       public          postgres    false    225            n           0    0    rolOpciones_nombreOpcion_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public."rolOpciones_nombreOpcion_seq" OWNED BY public."rolOpciones"."nombreOpcion";
          public          postgres    false    224            �            1259    49508    rol_idRol_seq    SEQUENCE     �   CREATE SEQUENCE public."rol_idRol_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."rol_idRol_seq";
       public          postgres    false    222            o           0    0    rol_idRol_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."rol_idRol_seq" OWNED BY public.rol."idRol";
          public          postgres    false    221            �            1259    49570    rol_opciones    TABLE     i   CREATE TABLE public.rol_opciones (
    id_opcion integer NOT NULL,
    nombre_opcion integer NOT NULL
);
     DROP TABLE public.rol_opciones;
       public         heap    postgres    false            �            1259    49569    rol_opciones_id_opcion_seq    SEQUENCE     �   CREATE SEQUENCE public.rol_opciones_id_opcion_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.rol_opciones_id_opcion_seq;
       public          postgres    false    230            p           0    0    rol_opciones_id_opcion_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.rol_opciones_id_opcion_seq OWNED BY public.rol_opciones.id_opcion;
          public          postgres    false    229            �            1259    49520    rol_rolOpciones    TABLE     r   CREATE TABLE public."rol_rolOpciones" (
    "rol_idRol" integer,
    "rolOpciones_idOpciones" integer NOT NULL
);
 %   DROP TABLE public."rol_rolOpciones";
       public         heap    postgres    false            �            1259    49557    rol_rol_opciones    TABLE     p   CREATE TABLE public.rol_rol_opciones (
    rol_opciones_id_opciones integer NOT NULL,
    rol_id_rol integer
);
 $   DROP TABLE public.rol_rol_opciones;
       public         heap    postgres    false            �            1259    49556 -   rol_rol_opciones_rol_opciones_id_opciones_seq    SEQUENCE     �   CREATE SEQUENCE public.rol_rol_opciones_rol_opciones_id_opciones_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 D   DROP SEQUENCE public.rol_rol_opciones_rol_opciones_id_opciones_seq;
       public          postgres    false    228            q           0    0 -   rol_rol_opciones_rol_opciones_id_opciones_seq    SEQUENCE OWNED BY        ALTER SEQUENCE public.rol_rol_opciones_rol_opciones_id_opciones_seq OWNED BY public.rol_rol_opciones.rol_opciones_id_opciones;
          public          postgres    false    227            �            1259    49624    rol_rolopciones    TABLE     l   CREATE TABLE public.rol_rolopciones (
    rolopciones_idopciones integer NOT NULL,
    rol_idrol integer
);
 #   DROP TABLE public.rol_rolopciones;
       public         heap    postgres    false            �            1259    49623 *   rol_rolopciones_rolopciones_idopciones_seq    SEQUENCE     �   CREATE SEQUENCE public.rol_rolopciones_rolopciones_idopciones_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 A   DROP SEQUENCE public.rol_rolopciones_rolopciones_idopciones_seq;
       public          postgres    false    232            r           0    0 *   rol_rolopciones_rolopciones_idopciones_seq    SEQUENCE OWNED BY     y   ALTER SEQUENCE public.rol_rolopciones_rolopciones_idopciones_seq OWNED BY public.rol_rolopciones.rolopciones_idopciones;
          public          postgres    false    231            �            1259    49497    rol_usuarios    TABLE     i   CREATE TABLE public.rol_usuarios (
    "rol_idRol" integer NOT NULL,
    "usuarios_idUsuario" integer
);
     DROP TABLE public.rol_usuarios;
       public         heap    postgres    false            �            1259    49496    rol_usuarios_rol_idRol_seq    SEQUENCE     �   CREATE SEQUENCE public."rol_usuarios_rol_idRol_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public."rol_usuarios_rol_idRol_seq";
       public          postgres    false    220            s           0    0    rol_usuarios_rol_idRol_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public."rol_usuarios_rol_idRol_seq" OWNED BY public.rol_usuarios."rol_idRol";
          public          postgres    false    219            �            1259    49631    rolopciones    TABLE     f   CREATE TABLE public.rolopciones (
    idopcion integer NOT NULL,
    nombreopcion integer NOT NULL
);
    DROP TABLE public.rolopciones;
       public         heap    postgres    false            �            1259    49630    rolopciones_idopcion_seq    SEQUENCE     �   CREATE SEQUENCE public.rolopciones_idopcion_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.rolopciones_idopcion_seq;
       public          postgres    false    234            t           0    0    rolopciones_idopcion_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.rolopciones_idopcion_seq OWNED BY public.rolopciones.idopcion;
          public          postgres    false    233            �            1259    49476    sessions    TABLE     �   CREATE TABLE public.sessions (
    "fechaIngreso" date,
    "fechaCierre" date,
    "usuarios_idUsuario" integer,
    id_sesiones integer NOT NULL
);
    DROP TABLE public.sessions;
       public         heap    postgres    false            �            1259    57666    sessions_id_sesiones_seq    SEQUENCE     �   CREATE SEQUENCE public.sessions_id_sesiones_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.sessions_id_sesiones_seq;
       public          postgres    false    216            u           0    0    sessions_id_sesiones_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.sessions_id_sesiones_seq OWNED BY public.sessions.id_sesiones;
          public          postgres    false    235            �            1259    49480    usuarios    TABLE     B  CREATE TABLE public.usuarios (
    "idUsuario" integer NOT NULL,
    password character varying(50) NOT NULL,
    mail character varying(120),
    status character varying(20),
    persona_id_persona2 integer,
    session_active text,
    user_name character varying(50) NOT NULL,
    intento_fallido integer DEFAULT 0
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false            �            1259    49479    usuarios_idUsuario_seq    SEQUENCE     �   CREATE SEQUENCE public."usuarios_idUsuario_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."usuarios_idUsuario_seq";
       public          postgres    false    218            v           0    0    usuarios_idUsuario_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."usuarios_idUsuario_seq" OWNED BY public.usuarios."idUsuario";
          public          postgres    false    217            �           2604    49473    persona idPersona    DEFAULT     z   ALTER TABLE ONLY public.persona ALTER COLUMN "idPersona" SET DEFAULT nextval('public."persona_idPersona_seq"'::regclass);
 B   ALTER TABLE public.persona ALTER COLUMN "idPersona" DROP DEFAULT;
       public          postgres    false    215    214    215            �           2604    49545    persona id_persona    DEFAULT     x   ALTER TABLE ONLY public.persona ALTER COLUMN id_persona SET DEFAULT nextval('public.persona_id_persona_seq'::regclass);
 A   ALTER TABLE public.persona ALTER COLUMN id_persona DROP DEFAULT;
       public          postgres    false    226    215            �           2604    49512 	   rol idRol    DEFAULT     j   ALTER TABLE ONLY public.rol ALTER COLUMN "idRol" SET DEFAULT nextval('public."rol_idRol_seq"'::regclass);
 :   ALTER TABLE public.rol ALTER COLUMN "idRol" DROP DEFAULT;
       public          postgres    false    221    222    222            �           2604    49612    rolOpciones nombreOpcion    DEFAULT     �   ALTER TABLE ONLY public."rolOpciones" ALTER COLUMN "nombreOpcion" SET DEFAULT nextval('public."rolOpciones_nombreOpcion_seq"'::regclass);
 K   ALTER TABLE public."rolOpciones" ALTER COLUMN "nombreOpcion" DROP DEFAULT;
       public          postgres    false    225    224    225            �           2604    49573    rol_opciones id_opcion    DEFAULT     �   ALTER TABLE ONLY public.rol_opciones ALTER COLUMN id_opcion SET DEFAULT nextval('public.rol_opciones_id_opcion_seq'::regclass);
 E   ALTER TABLE public.rol_opciones ALTER COLUMN id_opcion DROP DEFAULT;
       public          postgres    false    230    229    230            �           2604    49560 )   rol_rol_opciones rol_opciones_id_opciones    DEFAULT     �   ALTER TABLE ONLY public.rol_rol_opciones ALTER COLUMN rol_opciones_id_opciones SET DEFAULT nextval('public.rol_rol_opciones_rol_opciones_id_opciones_seq'::regclass);
 X   ALTER TABLE public.rol_rol_opciones ALTER COLUMN rol_opciones_id_opciones DROP DEFAULT;
       public          postgres    false    228    227    228            �           2604    49627 &   rol_rolopciones rolopciones_idopciones    DEFAULT     �   ALTER TABLE ONLY public.rol_rolopciones ALTER COLUMN rolopciones_idopciones SET DEFAULT nextval('public.rol_rolopciones_rolopciones_idopciones_seq'::regclass);
 U   ALTER TABLE public.rol_rolopciones ALTER COLUMN rolopciones_idopciones DROP DEFAULT;
       public          postgres    false    232    231    232            �           2604    49500    rol_usuarios rol_idRol    DEFAULT     �   ALTER TABLE ONLY public.rol_usuarios ALTER COLUMN "rol_idRol" SET DEFAULT nextval('public."rol_usuarios_rol_idRol_seq"'::regclass);
 G   ALTER TABLE public.rol_usuarios ALTER COLUMN "rol_idRol" DROP DEFAULT;
       public          postgres    false    220    219    220            �           2604    49634    rolopciones idopcion    DEFAULT     |   ALTER TABLE ONLY public.rolopciones ALTER COLUMN idopcion SET DEFAULT nextval('public.rolopciones_idopcion_seq'::regclass);
 C   ALTER TABLE public.rolopciones ALTER COLUMN idopcion DROP DEFAULT;
       public          postgres    false    234    233    234            �           2604    57667    sessions id_sesiones    DEFAULT     |   ALTER TABLE ONLY public.sessions ALTER COLUMN id_sesiones SET DEFAULT nextval('public.sessions_id_sesiones_seq'::regclass);
 C   ALTER TABLE public.sessions ALTER COLUMN id_sesiones DROP DEFAULT;
       public          postgres    false    235    216            �           2604    49483    usuarios idUsuario    DEFAULT     |   ALTER TABLE ONLY public.usuarios ALTER COLUMN "idUsuario" SET DEFAULT nextval('public."usuarios_idUsuario_seq"'::regclass);
 C   ALTER TABLE public.usuarios ALTER COLUMN "idUsuario" DROP DEFAULT;
       public          postgres    false    217    218    218            P          0    49470    persona 
   TABLE DATA           o   COPY public.persona ("idPersona", nombres, apellido, identificacion, id_persona, fecha_nacimiento) FROM stdin;
    public          postgres    false    215   Nk       W          0    49509    rol 
   TABLE DATA           1   COPY public.rol ("idRol", "rolName") FROM stdin;
    public          postgres    false    222   �k       Z          0    49531    rolOpciones 
   TABLE DATA           C   COPY public."rolOpciones" ("nombreOpcion", "idOpcion") FROM stdin;
    public          postgres    false    225   'l       _          0    49570    rol_opciones 
   TABLE DATA           @   COPY public.rol_opciones (id_opcion, nombre_opcion) FROM stdin;
    public          postgres    false    230   Wl       X          0    49520    rol_rolOpciones 
   TABLE DATA           R   COPY public."rol_rolOpciones" ("rol_idRol", "rolOpciones_idOpciones") FROM stdin;
    public          postgres    false    223   tl       ]          0    49557    rol_rol_opciones 
   TABLE DATA           P   COPY public.rol_rol_opciones (rol_opciones_id_opciones, rol_id_rol) FROM stdin;
    public          postgres    false    228   �l       a          0    49624    rol_rolopciones 
   TABLE DATA           L   COPY public.rol_rolopciones (rolopciones_idopciones, rol_idrol) FROM stdin;
    public          postgres    false    232   �l       U          0    49497    rol_usuarios 
   TABLE DATA           I   COPY public.rol_usuarios ("rol_idRol", "usuarios_idUsuario") FROM stdin;
    public          postgres    false    220   �l       c          0    49631    rolopciones 
   TABLE DATA           =   COPY public.rolopciones (idopcion, nombreopcion) FROM stdin;
    public          postgres    false    234   �l       Q          0    49476    sessions 
   TABLE DATA           d   COPY public.sessions ("fechaIngreso", "fechaCierre", "usuarios_idUsuario", id_sesiones) FROM stdin;
    public          postgres    false    216   
m       S          0    49480    usuarios 
   TABLE DATA           �   COPY public.usuarios ("idUsuario", password, mail, status, persona_id_persona2, session_active, user_name, intento_fallido) FROM stdin;
    public          postgres    false    218   �m       w           0    0    persona_idPersona_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."persona_idPersona_seq"', 49, true);
          public          postgres    false    214            x           0    0    persona_id_persona_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.persona_id_persona_seq', 49, true);
          public          postgres    false    226            y           0    0    rolOpciones_nombreOpcion_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public."rolOpciones_nombreOpcion_seq"', 1, false);
          public          postgres    false    224            z           0    0    rol_idRol_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."rol_idRol_seq"', 6, true);
          public          postgres    false    221            {           0    0    rol_opciones_id_opcion_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.rol_opciones_id_opcion_seq', 1, false);
          public          postgres    false    229            |           0    0 -   rol_rol_opciones_rol_opciones_id_opciones_seq    SEQUENCE SET     \   SELECT pg_catalog.setval('public.rol_rol_opciones_rol_opciones_id_opciones_seq', 1, false);
          public          postgres    false    227            }           0    0 *   rol_rolopciones_rolopciones_idopciones_seq    SEQUENCE SET     Y   SELECT pg_catalog.setval('public.rol_rolopciones_rolopciones_idopciones_seq', 1, false);
          public          postgres    false    231            ~           0    0    rol_usuarios_rol_idRol_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public."rol_usuarios_rol_idRol_seq"', 1, false);
          public          postgres    false    219                       0    0    rolopciones_idopcion_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.rolopciones_idopcion_seq', 1, false);
          public          postgres    false    233            �           0    0    sessions_id_sesiones_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.sessions_id_sesiones_seq', 61, true);
          public          postgres    false    235            �           0    0    usuarios_idUsuario_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."usuarios_idUsuario_seq"', 48, true);
          public          postgres    false    217            �           2606    49475    persona persona_pk 
   CONSTRAINT     Y   ALTER TABLE ONLY public.persona
    ADD CONSTRAINT persona_pk PRIMARY KEY ("idPersona");
 <   ALTER TABLE ONLY public.persona DROP CONSTRAINT persona_pk;
       public            postgres    false    215            �           2606    49536    rolOpciones rolOpciones_pk 
   CONSTRAINT     d   ALTER TABLE ONLY public."rolOpciones"
    ADD CONSTRAINT "rolOpciones_pk" PRIMARY KEY ("idOpcion");
 H   ALTER TABLE ONLY public."rolOpciones" DROP CONSTRAINT "rolOpciones_pk";
       public            postgres    false    225            �           2606    49575    rol_opciones rol_opciones_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public.rol_opciones
    ADD CONSTRAINT rol_opciones_pkey PRIMARY KEY (id_opcion);
 H   ALTER TABLE ONLY public.rol_opciones DROP CONSTRAINT rol_opciones_pkey;
       public            postgres    false    230            �           2606    49514 
   rol rol_pk 
   CONSTRAINT     M   ALTER TABLE ONLY public.rol
    ADD CONSTRAINT rol_pk PRIMARY KEY ("idRol");
 4   ALTER TABLE ONLY public.rol DROP CONSTRAINT rol_pk;
       public            postgres    false    222            �           2606    49524 "   rol_rolOpciones rol_rolOpciones_pk 
   CONSTRAINT     z   ALTER TABLE ONLY public."rol_rolOpciones"
    ADD CONSTRAINT "rol_rolOpciones_pk" PRIMARY KEY ("rolOpciones_idOpciones");
 P   ALTER TABLE ONLY public."rol_rolOpciones" DROP CONSTRAINT "rol_rolOpciones_pk";
       public            postgres    false    223            �           2606    49562 &   rol_rol_opciones rol_rol_opciones_pkey 
   CONSTRAINT     z   ALTER TABLE ONLY public.rol_rol_opciones
    ADD CONSTRAINT rol_rol_opciones_pkey PRIMARY KEY (rol_opciones_id_opciones);
 P   ALTER TABLE ONLY public.rol_rol_opciones DROP CONSTRAINT rol_rol_opciones_pkey;
       public            postgres    false    228            �           2606    49629 $   rol_rolopciones rol_rolopciones_pkey 
   CONSTRAINT     v   ALTER TABLE ONLY public.rol_rolopciones
    ADD CONSTRAINT rol_rolopciones_pkey PRIMARY KEY (rolopciones_idopciones);
 N   ALTER TABLE ONLY public.rol_rolopciones DROP CONSTRAINT rol_rolopciones_pkey;
       public            postgres    false    232            �           2606    49502    rol_usuarios rol_usuarios_pk 
   CONSTRAINT     c   ALTER TABLE ONLY public.rol_usuarios
    ADD CONSTRAINT rol_usuarios_pk PRIMARY KEY ("rol_idRol");
 F   ALTER TABLE ONLY public.rol_usuarios DROP CONSTRAINT rol_usuarios_pk;
       public            postgres    false    220            �           2606    49636    rolopciones rolopciones_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.rolopciones
    ADD CONSTRAINT rolopciones_pkey PRIMARY KEY (idopcion);
 F   ALTER TABLE ONLY public.rolopciones DROP CONSTRAINT rolopciones_pkey;
       public            postgres    false    234            �           2606    57672    sessions sessions_pk 
   CONSTRAINT     [   ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pk PRIMARY KEY (id_sesiones);
 >   ALTER TABLE ONLY public.sessions DROP CONSTRAINT sessions_pk;
       public            postgres    false    216            �           2606    49485    usuarios usuarios_pk 
   CONSTRAINT     [   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pk PRIMARY KEY ("idUsuario");
 >   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pk;
       public            postgres    false    218            �           2606    49596 ,   rol_rol_opciones fkdp7vgtfjv2orqa1slqfms2cpv    FK CONSTRAINT     �   ALTER TABLE ONLY public.rol_rol_opciones
    ADD CONSTRAINT fkdp7vgtfjv2orqa1slqfms2cpv FOREIGN KEY (rol_id_rol) REFERENCES public.rol("idRol");
 V   ALTER TABLE ONLY public.rol_rol_opciones DROP CONSTRAINT fkdp7vgtfjv2orqa1slqfms2cpv;
       public          postgres    false    228    3244    222            �           2606    49637 +   rol_rolopciones fkff8kp85qwwrw8cabnonw6kedt    FK CONSTRAINT     �   ALTER TABLE ONLY public.rol_rolopciones
    ADD CONSTRAINT fkff8kp85qwwrw8cabnonw6kedt FOREIGN KEY (rol_idrol) REFERENCES public.rol("idRol");
 U   ALTER TABLE ONLY public.rol_rolopciones DROP CONSTRAINT fkff8kp85qwwrw8cabnonw6kedt;
       public          postgres    false    3244    222    232            �           2606    49606 $   usuarios fkp272gbvrce10jrry0usroxllm    FK CONSTRAINT     �   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT fkp272gbvrce10jrry0usroxllm FOREIGN KEY (persona_id_persona2) REFERENCES public.persona("idPersona");
 N   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT fkp272gbvrce10jrry0usroxllm;
       public          postgres    false    215    3236    218            �           2606    49537 7   rol_rolOpciones rol_rolOpciones_rolOpciones_idOpcion_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public."rol_rolOpciones"
    ADD CONSTRAINT "rol_rolOpciones_rolOpciones_idOpcion_fk" FOREIGN KEY ("rolOpciones_idOpciones") REFERENCES public."rolOpciones"("idOpcion");
 e   ALTER TABLE ONLY public."rol_rolOpciones" DROP CONSTRAINT "rol_rolOpciones_rolOpciones_idOpcion_fk";
       public          postgres    false    223    3248    225            �           2606    49525 ,   rol_rolOpciones rol_rolOpciones_rol_idRol_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public."rol_rolOpciones"
    ADD CONSTRAINT "rol_rolOpciones_rol_idRol_fk" FOREIGN KEY ("rol_idRol") REFERENCES public.rol("idRol");
 Z   ALTER TABLE ONLY public."rol_rolOpciones" DROP CONSTRAINT "rol_rolOpciones_rol_idRol_fk";
       public          postgres    false    223    222    3244            �           2606    49515 &   rol_usuarios rol_usuarios_rol_idRol_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.rol_usuarios
    ADD CONSTRAINT "rol_usuarios_rol_idRol_fk" FOREIGN KEY ("rol_idRol") REFERENCES public.rol("idRol");
 R   ALTER TABLE ONLY public.rol_usuarios DROP CONSTRAINT "rol_usuarios_rol_idRol_fk";
       public          postgres    false    3244    222    220            �           2606    49503 /   rol_usuarios rol_usuarios_usuarios_idUsuario_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.rol_usuarios
    ADD CONSTRAINT "rol_usuarios_usuarios_idUsuario_fk" FOREIGN KEY ("usuarios_idUsuario") REFERENCES public.usuarios("idUsuario");
 [   ALTER TABLE ONLY public.rol_usuarios DROP CONSTRAINT "rol_usuarios_usuarios_idUsuario_fk";
       public          postgres    false    220    3240    218            �           2606    57661 '   sessions sessions_usuarios_idUsuario_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_usuarios_idUsuario_fk" FOREIGN KEY ("usuarios_idUsuario") REFERENCES public.usuarios("idUsuario");
 S   ALTER TABLE ONLY public.sessions DROP CONSTRAINT "sessions_usuarios_idUsuario_fk";
       public          postgres    false    3240    218    216            P   �   x���1�0��9E/d;vҌ���`	(BH��B9?"�����0��r��c��#��\^�ۏ��Y@(���@N�E`�_%+��F颢ϗ6*.�L�F����*5*�P���T6�1��
FD���a�{�E]      W   +   x�3�-.M,���2�tL����2�(*MMJ������� �D	�      Z       x���Q0�4�
�F�F`ژӘ+F��� e��      _      x������ � �      X      x������ � �      ]      x������ � �      a      x������ � �      U      x�3�41����� ?S      c      x������ � �      Q   �   x�}ѱ1D�X�嘓v�^���̞�x��,��T��hG����oӑy䎿�+jN����s�����xNi�kڬ�ZB+h��S��orC��=��.�o�F���.w��f.....���E�"p�\.�����bp1�\.���������������Ұ�a_þ�v��c���      S   �   x�m�A�0���^�H;��A\��� l&�Pb��K5?�t���L�9]�rmSm�����n��tٍ�I�G��w�z�n�Ļ�}����ftV̻r޿P*&*+ �I#r!'!�6�iQK��\;o����d{/� ��V�DFG���/�ǰ�{�?0p�)u��� ���l     