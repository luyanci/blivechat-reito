# -*- coding: utf-8 -*-
import contextlib
from typing import *

import sqlalchemy.ext.declarative
import sqlalchemy.orm

import config

OrmBase = sqlalchemy.ext.declarative.declarative_base()
_engine = None
_DbSession: Optional[Type[sqlalchemy.orm.Session]] = None


def init(_debug):
    cfg = config.get_config()
    global _engine, _DbSession
    # engine = sqlalchemy.create_engine(cfg.database_url, echo=debug)
    _engine = sqlalchemy.create_engine(cfg.database_url)
    _DbSession = sqlalchemy.orm.sessionmaker(bind=_engine)

    OrmBase.metadata.create_all(_engine)


@contextlib.contextmanager
def get_session() -> ContextManager[sqlalchemy.orm.Session]:
    session = _DbSession()
    try:
        yield session
    except BaseException:
        session.rollback()
        raise
    finally:
        session.close()
